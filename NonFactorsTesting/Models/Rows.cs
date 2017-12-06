using System.Collections.Generic;

namespace NonFactorsTesting.Models
{
    public enum InForeCastType
    {
        NotReviewed = 0,
        InForecast = 1,
        NotInForecast = 2,
        Provisional = 3
    }

    
    public class Rows
    {
        public InForeCastType InForeCastType { get; set; }
        public string Test10 { get; set; }
        public string Test11 { get; set; }
        public string Test12 { get; set; }
        public string Test13 { get; set; }
        public string Test14 { get; set; }
        public string Test15 { get; set; }
        public string Test16 { get; set; }
        public string Test17 { get; set; }
        public string Test18 { get; set; }
        public string Test19 { get; set; }
        public string Test2 { get; set; }
        public string Test20 { get; set; }
        public string Test21 { get; set; }
        public string Test22 { get; set; }
        public string Test23 { get; set; }
        public string Test24 { get; set; }
        public string Test25 { get; set; }
        public string Test26 { get; set; }
        public string Test3 { get; set; }
        public string Test4 { get; set; }
        public string Test5 { get; set; }
        public string Test6 { get; set; }
        public string Test7 { get; set; }
        public string Test8 { get; set; }
        public string Test9 { get; set; }

        public Rows()
        { }

        public Rows(InForeCastType inForeCastType, string test2, string test3, string test4, string test5, string test6, string test7, string test8, string test9,
            string test10, string test11, string test12, string test13, string test14, string test15, string test16, string test17, string test18,
            string test19, string test20, string test21, string test22, string test23, string test24, string test25, string test26)
        {
            InForeCastType = inForeCastType;
            Test2 = test2;
            Test3 = test3;
            Test4 = test4;
            Test5 = test5;
            Test6 = test6;
            Test7 = test7;
            Test8 = test8;
            Test9 = test9;
            Test10 = test10;
            Test11 = test11;
            Test12 = test12;
            Test13 = test13;
            Test14 = test14;
            Test15 = test15;
            Test16 = test16;
            Test17 = test17;
            Test18 = test18;
            Test19 = test19;
            Test20 = test20;
            Test21 = test21;
            Test22 = test22;
            Test23 = test23;
            Test24 = test24;
            Test25 = test25;
            Test26 = test26;
        }


        public static IEnumerable<Rows> CreateTestList(int numberOfRows)
        {
            List<Rows> list = new List<Rows>();
            for (int i = 0; i < 30; i++)
            {
                string value = i.ToString();
                InForeCastType v1 = (InForeCastType) (i % 4);
                string v2 = $"Test row {value} Test Col 2";
                string v3 = $"Test row {value} Test Col 3";
                string v4 = $"Test row {value} Test Col 4";
                string v5 = $"Test row {value} Test Col 5";
                string v6 = $"Test row {value} Test Col 6";
                string v7 = $"Test row {value} Test Col 7";
                string v8 = $"Test row {value} Test Col 8";
                string v9 = $"Test row {value} Test Col 9";
                string v10 = $"Test row {value} Test Col 10";
                string v11 = $"Test row {value} Test Col 11";
                string v12 = $"Test row {value} Test Col 12";
                string v13 = $"Test row {value} Test Col 13";
                string v14 = $"Test row {value} Test Col 14";
                string v15 = $"Test row {value} Test Col 15";
                string v16 = $"Test row {value} Test Col 16";
                string v17 = $"Test row {value} Test Col 17";
                string v18 = $"Test row {value} Test Col 18";
                string v19 = $"Test row {value} Test Col 19";
                string v20 = $"Test row {value} Test Col 20";
                string v21 = $"Test row {value} Test Col 21";
                string v22 = $"Test row {value} Test Col 22";
                string v23 = $"Test row {value} Test Col 23";
                string v24 = $"Test row {value} Test Col 24";
                string v25 = $"Test row {value} Test Col 25";
                string v26 = $"Test row {value} Test Col 26";
                Rows item = new Rows(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26);
                list.Add(item);
            }
            return list;
        }
    }

 
}