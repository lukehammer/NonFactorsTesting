using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NonFactors.Mvc.Grid;
using System.Linq.Expressions;


namespace NonFactorsTesting.Models
{

    public class InForeCastTypeEqual : BaseGridFilter
    {


        public override Expression Apply(Expression expression)
        {
            return Expression.Equal(expression, Expression.Constant(null));
        }
    }
}