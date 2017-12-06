using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NonFactorsTesting.Models
{
    public class Rows2
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age => (int)((DateTime.Now - BirthDay).TotalDays / 365.242199);
        public bool? Employed { get; set; }
        public DateTime BirthDay { get; set; }
   
        

        public Rows2(int seed)

        {
            Random random = new Random(seed);
            Name = Faker.NameFaker.FirstName();
            Surname = Faker.NameFaker.LastName();
            int randomNumber = random.Next(0, 24000);
            
            if (randomNumber % 3 == 0)
            {
                Employed = true;
            }
            if (randomNumber % 3 == 1)
            {
                Employed = false;
            }

            BirthDay = DateTime.Today.AddDays(-randomNumber);
        }

        public static IEnumerable<Rows2> CreateTestList(int numberOfRows)
        {
            List<Rows2> list = new List<Rows2>();
            for (int i = 0; i < numberOfRows; i++)
            {
               
                Rows2 item = new Rows2(i);
                list.Add(item);
            }
            return list;


        }


    }

  


}