using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Specifications;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        // before SpecificationEvaluator =>
         Task<T> GetByIdAsync(int id);
         Task<IReadOnlyList<T>> ListAllAsync();

         // after SpecificationEvaluator =>

         Task<T> GetEntityWithSpec(ISpecification<T> spec);
         Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);

         // For Paging
         Task<int> CountAsync(ISpecification<T> spec);

        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
         
    }
}
