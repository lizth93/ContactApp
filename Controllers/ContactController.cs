using contactApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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


        // GET: api/<ContactController>
        [HttpGet]
        public IEnumerable<Models.ContactDTO> Get()
        {
            return context.Contacts.ToList();
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

        public async Task<IActionResult> Put(int id, [FromBody] ContactDTO updatedContact) {

            if (id != updatedContact.Id)
            {
                return BadRequest();
            }

            context.Contacts.Entry(updatedContact).State = EntityState.Modified;

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
            var contact = await context.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound(); 
            }

            context.Contacts.Remove(contact); 
            await context.SaveChangesAsync(); 

            return NoContent();
        }
    }
}
