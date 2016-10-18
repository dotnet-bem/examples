using System.Web.Configuration;

namespace SiteEngine.Models
{
    public static class AppSettings
    {
        private const string APPLY_TEMPLATES_PARAMETER = "applyTemplates";

        public static bool ApplyTemplates
        {
            get { 
                return WebConfigurationManager.AppSettings[APPLY_TEMPLATES_PARAMETER] != "false";
            }
        }
    }
}