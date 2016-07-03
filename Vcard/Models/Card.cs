namespace Vcard.Models
{
    public class Card
    {
        public string lang { get; set; }
        public string name { get; set; }
        public string position { get; set; }
        public Address address { get; set; }
        public Company company { get; set; }
        public Contact contact { get; set; }
    }
}