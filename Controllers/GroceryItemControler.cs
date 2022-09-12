using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace headversity_sorting.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemController : ControllerBase
    {

        private readonly ILogger<GroceryItemController> _logger;

        public GroceryItemController(ILogger<GroceryItemController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<GroceryItem> Get()
        {
            return groceryList;
        }

        private static readonly GroceryItem[] groceryList = {
            new GroceryItem() {
                Name = "Orange",
                Type = "Fruit",
                Amount = 5,
                Price = 7.0
            },
            new GroceryItem() {
                Name = "Apple",
                Type = "Fruit",
                Amount = 8,
                Price = 6.0
            },
            new GroceryItem() {
                Name = "Grapes",
                Type = "Fruit",
                Amount = 1,
                Price = 3.0
            },
            new GroceryItem() {
                Name = "Banana",
                Type = "Fruit",
                Amount = 8,
                Price = 4.0
            },
            new GroceryItem() {
                Name = "Chicken",
                Type = "Meat",
                Amount = 1,
                Price = 8.0
            },
            new GroceryItem() {
                Name = "Ground Beef",
                Type = "Meat",
                Amount = 1,
                Price = 12.0
            },
            new GroceryItem() {
                Name = "Steak",
                Type = "Meat",
                Amount = 1,
                Price = 12.0
            },
            new GroceryItem() {
                Name = "Broccoli",
                Type = "Vegetable",
                Amount = 3,
                Price = 9.0
            },
            new GroceryItem() {
                Name = "Carrot",
                Type = "Vegetable",
                Amount = 8,
                Price = 3.0
            },
            new GroceryItem() {
                Name = "Bell Pepper",
                Type = "Vegetable",
                Amount = 4,
                Price = 5.0
            }
        };
    }
}