using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required] public String Username { get; set; }
        [Required] public string KnownAs { get; set; }  
        [Required] public string Gender { get; set; }   
        [Required] public DateTime DateOfBirth { get; set; }
        [Required] public string City { get; set; } 
        [Required] public string Country { get; set; }
        
        [Required]
        [StringLength(32, MinimumLength = 4)]
        public String Password { get; set; }
    }
}