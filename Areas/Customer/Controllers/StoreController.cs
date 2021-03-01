using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebStore.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class StoreController : Controller
    { 
        public IActionResult StorePhone()
        {
            return View();
        }

        public IActionResult stores()
        {
            return View();
        }

        public IActionResult makroon()
        {
            return View();
        }

        public IActionResult VNEX()
        {
            return View();
        }

    }
}
