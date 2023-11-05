using System.ComponentModel.DataAnnotations;

namespace contactApp.Models
{
    public class ContactDTO

    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public DateTime Birthday { get; set; }

        public string? TeamMember { get; set; }

        public string? Address { get; set; }

        public string? ImageUrl { get; set; }
    }
}