using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
         Expression<Func<T, bool>> Criteria { get; }    // Where criteria
         List<Expression<Func<T, object>>> Includes { get; }    // Include operations : in Products => ProductType, ProductBrand
    }
}