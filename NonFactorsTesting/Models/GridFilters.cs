using System;
using System.Linq.Expressions;
using NonFactors.Mvc.Grid;

namespace NonFactorsTesting.Models
{
    public class InForeCastTypeEqual : BaseGridFilter
    {
        public override Expression Apply(Expression expression)
        {
            return Expression.Equal(expression,
                Expression.Constant((InForeCastType)Enum.ToObject(typeof(InForeCastType), Value)));
        }
    }
}