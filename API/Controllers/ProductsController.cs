using System.Threading.Tasks;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

         // GET api/products
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var values = await _context.Products.ToListAsync();

            return Ok(values); 
        }

        // GET api/products/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var value = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }
    }
}