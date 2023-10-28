using Microsoft.AspNetCore.Mvc;

namespace contactApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<ContactsController> _logger;

        public ContactsController(ILogger<ContactsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetContacts")]
        public Contact Get()
        {
            var contact = new Contact
            {
                Name = "Luz Edith",
                LastName = "Tobar",
                Email = "lizth93@hotmail.com",
                PhoneNumber = 3137036415,
                Birthday = new DateTime(1993, 8, 11),
                TeamMember = "Tobar",
                Address = "Calle 6 a oeste",
                ImageUrl = "https://quinpu.com/uploads/default/original/1X/351a23e1787a29ce86e1e23f05f15e7b452b7b4d.jpeg"
            };

            return contact;
        }
    }
}