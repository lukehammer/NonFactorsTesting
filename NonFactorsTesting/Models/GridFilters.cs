using System.Linq.Expressions;
using NonFactors.Mvc.Grid;

namespace NonFactorsTesting.Models
{
    public class InForeCastTypeEqual : Int32Filter
    {
        public override Expression Apply(Expression expression)
        {
            return Expression.Equal(expression, Expression.Constant((InForeCastType) int.Parse(Value)));
        }
    }
}