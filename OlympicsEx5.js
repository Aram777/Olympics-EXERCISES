
//  Olympics.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-11-04 Last modification.

// Here we define a JavaScript class named Olympics.

class Olympics
{
   constructor( given_olympic_year,
                given_olympic_city,
                given_olympic_country )
   {
      this.olympic_year = given_olympic_year ;
      this.olympic_city = given_olympic_city ;
      this.olympic_country = given_olympic_country ;
   }

   // Next, we specify three member functions, or getters, for
   // the class Olympics.

   get_year()
   {
      return this.olympic_year ;
   }

   get_city()
   {
      return this.olympic_city ;
   }

   get_country()
   {
      return this.olympic_country ;
   }

   get_full_data()
   {
      return "    In "  +  this.olympic_year  +
             ", Olympic Games were held in " +  this.olympic_city  +
             ", "  +  this.olympic_country  +  "." ;
   }
}
class WinterOlympics extends Olympics
{
    get_full_data()
    {

      return "    In "  +  this.olympic_year  +
             ", Winter Olympic Games were held in " +  this.olympic_city  +
             ", "  +  this.olympic_country  +  "." ;
    }

}
// The following is an initialized array that contains references
// to Olympics objects.

var  olympics_list  =
[
   new Olympics( 1896, "Athens",   "Greece" ),
   new Olympics( 1900, "Paris",    "France" ),
   new Olympics( 1904, "St. Louis", "U.S.A." ),
   new Olympics( 1906, "Athens",   "Greece"  ), 
   new Olympics( 1908, "London",   "Great Britain" ),
   new Olympics( 1912, "Stockholm","Sweden" ),
   new Olympics( 1920, "Antwerp",  "Belgium"   ),
   new Olympics( 1924, "Paris",    "France"    ),
   new Olympics( 1928, "Amsterdam","Netherlands"),
   new Olympics( 1932, "Los Angeles", "U.S.A."),
   new Olympics( 1936, "Berlin",  "Germany"   ),
   new Olympics( 1948, "London",  "Great Britain" ),
   new Olympics( 1952, "Helsinki","Finland"  ),
   new Olympics( 1956, "Melbourne","Australia" ),
   new Olympics( 1960, "Rome",     "Italy"   ),
   new Olympics( 1964, "Tokyo",    "Japan"   ),
   new Olympics( 1968, "Mexico City","Mexico" ),
   new Olympics( 1972, "Munich",   "West Germany" ),
   new Olympics( 1976, "Montreal", "Canada"  ),
   new Olympics( 1980, "Moscow",   "Soviet Union" ),
   new Olympics( 1984, "Los Angeles","U.S.A."),
   new Olympics( 1988, "Seoul",    "South Korea"),
   new Olympics( 1992, "Barcelona","Spain"   ),
   new Olympics( 1996, "Atlanta",  "U.S.A." ),
   new Olympics( 2000, "Sydney",   "Australia" ),
   new Olympics( 2004, "Athens",   "Greece"  ),
   new Olympics( 2008, "Beijing",  "China"   ),
   new Olympics( 2012, "London",   "Great Britain" ) ,
   new Olympics( 2016, "Rio de Janeiro",   "Brazil" ),
   new WinterOlympics( 2006, "Turin", "Italy"),
   new WinterOlympics( 1984, "Sarajevo", "Yogoslavia")
] ;

process.stdout.write( "\n This program can tell where the Olympic "
                    + "\n Games were held in a given year. Give "
                    + "\n a year by using four digits: "  ) ;

process.stdin.on( 'data', function( input_from_user )
{
   // This function will be executed after the user of the
   // program has typed in a year.
   if (isNaN(input_from_user))
   {
      var given_text= String(input_from_user).trim().toUpperCase();
      switch (given_text) {
         case "SUMMER":
         {
            for (var index = 0; index < olympics_list.length; index++) 
            {
               if (!(olympics_list[index] instanceof WinterOlympics) )
               {
                  process.stdout.write("\n    In "  +  olympics_list[index].get_year()  +
                  ", Olympic Games were held in " +  olympics_list[index].get_city()  +
                  ", "  +  olympics_list[index].get_country()  +  ".") ;
               }
            
            }
         }
         break;
         case "WINTER":
         {
            for (var index = 0; index < olympics_list.length; index++) 
            {
               if ((olympics_list[index] instanceof WinterOlympics) )
               {
                  process.stdout.write("\n    In "  +  olympics_list[index].get_year()  +
                  ", Winter Olympic Games were held in " +  olympics_list[index].get_city()  +
                  ", "  +  olympics_list[index].get_country()  +  ".") ;
               }
            
            }
         }
         break;
         default:
         {

         }
         break;
      }
   }
   else
   {
      var given_year = Number( input_from_user ) ;

      var selected_olympics = [] ;

      var olympics_index = 0 ;

      while ( olympics_index < olympics_list.length )
      {
         if ( olympics_list[ olympics_index ].get_year() == given_year )
         {
            selected_olympics.push(olympics_list[ olympics_index ] );
         }

         olympics_index ++ ;
      }
      switch (selected_olympics.length) {
         case 0:
            process.stdout.write( "\n   Sorry, no Olympic Games were held in "
            +  given_year + ".\n\n" ) ;

            break;
         case 1:
            process.stdout.write( "\n" + selected_olympics[0].get_full_data() + "\n\n" ) ;
            break;
         case 2:
            process.stdout.write( "\n" + selected_olympics[0].get_full_data() + "\n\n" ) ;
            process.stdout.write( "\n" + selected_olympics[1].get_full_data() + "\n\n" ) ;
            break;
         default:
            break;
      }
   }
   /*
   if ( selected_olympics != null )
   {
      process.stdout.write( "\n" + selected_olympics.get_full_data() + "\n\n" ) ;
   }
   else
   {
      process.stdout.write( "\n   Sorry, no Olympic Games were held in "
                         +  given_year + ".\n\n" ) ;
   }
*/
   process.exit() ;

} ) ;

