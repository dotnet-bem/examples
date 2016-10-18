using System.IO;
using System.Web;
using Newtonsoft.Json;

namespace SiteEngine.Models
{
    public static class Navigation
    {
        private static NavigationItem[] items;

        public static void Load(string path)
        {
            var json = File.ReadAllText(path);
            items = JsonConvert.DeserializeObject<NavigationItem[]>(json);
        }

        public static NavigationItem[] Items
        {
            get { return items; }
        }

        public class NavigationItem
        {
            public string content;

            public string url;
        }
    }
}