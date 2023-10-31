namespace ParkPlan.Data
{
    // Stores data for a user
    // Default values are used to simulate an existing profile
    public class User
    {
        public DateTime? Date { get; set; } = DateTime.Today;

        public TimeSpan? From { get; set; } = DateTime.Now.TimeOfDay;

        public TimeSpan? To { get; set; } = DateTime.Now.TimeOfDay.Add(new TimeSpan(01, 00, 00));

        public string? Repeats { get; set; } = "Does not repeat";

        public string? ParkingArea { get; set; }

        public string? ParkingLot { get; set; }

        public string? FirstName { get; set; } = "Dennis";

        public string? LastName{ get; set; } = "Lacasse";

        public string? BillingAddress1 { get; set; } = "222 Nepean St";

        public string? BillingAddress2 { get; set; }

        public string? Country { get; set; } = "Canada";

        public string? State { get; set; } = "Ontario";

        public string? City { get; set; } = "Ottawa";

        public string? Postal { get; set; } = "K2P0B8";

        public string? Phone { get; set; } = "613-123-4567";

    }
}
