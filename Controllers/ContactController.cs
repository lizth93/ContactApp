using contactApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace contactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ContactController : ControllerBase
    {
        private readonly AplicationDBContext context;

        public ContactController(AplicationDBContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public IEnumerable<Models.ContactDTO> Get()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return context.Contacts.Where(c => c.UserId == userId).ToList();
        }


        // GET api/<ContactController>/5
        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            Models.ContactDTO? specificContact = context.Contacts.ToList().FirstOrDefault(contact => contact.Id == id);

            if (specificContact != null)
            {
                return Ok(specificContact);
            }
            else
            {
                return NotFound();
            }
        }

       // POST api/<ContactController>
        [HttpPost]

        public IActionResult Post([FromBody] Models.ContactDTO newContact)
        {
        
            if (newContact != null)
            {
                var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                newContact.UserId = userId;

                context.Contacts.Add(newContact);
                context.SaveChanges();

                return CreatedAtAction("Get", new { id = newContact.Id }, newContact);
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<ContactController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] ContactDTO updatedContact)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var existingContact = await context.Contacts.FindAsync(id);

            if (existingContact == null || existingContact.UserId != userId)
            {
                return NotFound();
            }

            if (id != updatedContact.Id)
            {
                return BadRequest();
            }

            existingContact.Name = updatedContact.Name;
            existingContact.LastName = updatedContact.LastName;
            existingContact.Email = updatedContact.Email;
            existingContact.PhoneNumber = updatedContact.PhoneNumber;
            existingContact.Birthday = updatedContact.Birthday;
            existingContact.TeamMember = updatedContact.TeamMember;
            existingContact.Address = updatedContact.Address;
            existingContact.ImageUrl = updatedContact.ImageUrl;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        private bool ContactExists(int id)
        {
            return context.Contacts.Any(c => c.Id == id);
        }

        // DELETE api/<ContactController>/5
        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var contact = await context.Contacts.FindAsync(id);

            if (contact == null || contact.UserId != userId)
            {
                return NotFound();
            }

            context.Contacts.Remove(contact); 
            await context.SaveChangesAsync(); 

            return NoContent();
        }
    }
}
