module.exports = function (env) { /* eslint-disable-line no-unused-vars */
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {};

  //
  // ALTER DATE BY NUMBER OF MONTHS FUNCTION
  //
  filters.alterTodaysDateByNumberOfMonths = function( monthOffset, daysOffset ){

    daysOffset = ( typeof daysOffset === 'number' && parseInt(daysOffset) ) ? parseInt(daysOffset) : 0;

    let today = new Date();
    today.setDate(today.getDate() + daysOffset);
    var d = today.getDate();

    today.setMonth(today.getMonth() + monthOffset);
    if (today.getDate() !== d ) {
      today.setDate(0);
    }

    return today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

  };

   //
  // ALTER DATE BY NUMBER OF DAYS FUNCTION
  //
  filters.alterTodaysDateByNumberOfDays = function( daysOffset ){

    let today = new Date();
    today.setDate(today.getDate() + daysOffset);

    // Manually format the date to avoid leading zeros (day, month, year)
    return today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

  };


  //
  // GENERATE PAYMENT PLAN ROWS FUNCTION
  //
  filters.generatePaymentPlanRows = function( amount, months, daysOffset, dueMonth, alreadyPaid, showStatuses ){

    dueMonth = ( typeof dueMonth === 'number' && parseInt(dueMonth) > -1 ) ? parseInt(dueMonth) : -1;
    daysOffset = ( typeof daysOffset === 'number' && parseInt(daysOffset) && parseInt(daysOffset) > 0 ) ? parseInt(daysOffset) : 0;

    months = ( !Number.isNaN( parseInt(months) ) ) ? parseInt(months) : 3;
    amount = ( !Number.isNaN( amount.toFixed(2) ) ) ? amount.toFixed(2) : 50;

    if( dueMonth > months ){
      dueMonth = months - 1;
    }

    let paymentAmount = amount / months;
    paymentAmount = paymentAmount.toFixed(2);

    const rows = [];
    
    for( let i = 0; i < months; i++  ){

      let arr;

      if( dueMonth > -1 && showStatuses === 'true' ){

        //
        // SHOWING STATUS
        //

        arr = [ 
          { text: ( i + 1 ) },
          { text: '£' + paymentAmount },
          { text: filters.alterTodaysDateByNumberOfMonths( i, daysOffset ) }
        ];

        if( dueMonth > i  ){

          // Paid row
          arr.push( { html: '<strong class="nhsuk-tag nhsuk-tag--green">Paid</strong>' } );

        } else if ( i === dueMonth ){

          // Due row
          if( alreadyPaid === 'true' ){
            arr.push( { html: '<strong class="nhsuk-tag nhsuk-tag--green">Paid</strong>' } );
          } else {
            arr.push( { html: '<strong class="nhsuk-tag nhsuk-tag--dark-blue">Due</strong>' } );
          }

        } else {

          // Empty row i.e. in the future
          arr.push( { html: '' } );

        }

      } else {

        //
        // NOT SHOWING STATUS
        //

        arr = [ 
          { text: ( i + 1 ) },
          { text: '£' + paymentAmount },
          { text: filters.alterTodaysDateByNumberOfMonths( i, daysOffset ) }
        ];

      }

      rows.push( arr );
    }

    return rows;
    

  };

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters;
};
