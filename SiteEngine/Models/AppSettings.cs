using System.Web.Configuration;

namespace SiteEngine.Models
{
    public static class AppSettings
    {
        private const string APPLY_TEMPLATES_PARAMETER = "applyTemplates";

        private const string CONTENT_DIR_PARAMETER = "contentDir";
        
        public static bool ApplyTemplates
        {
            get
            {
                return WebConfigurationManager.AppSettings[APPLY_TEMPLATES_PARAMETER] != "false";
            }
        }
        public static string ContentDir
        {
            get
            {
                var value = WebConfigurationManager.AppSettings[CONTENT_DIR_PARAMETER];
                return string.IsNullOrWhiteSpace(value) ? "~/Content/" : value;
            }
        }
    }
}