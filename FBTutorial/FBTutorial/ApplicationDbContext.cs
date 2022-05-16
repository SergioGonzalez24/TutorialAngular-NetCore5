using FBTutorial.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FBTutorial
{
    public class ApplicationDbContext:DbContext
    {
        DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }
    }
}
