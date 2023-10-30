namespace ParkPlan.Data
{
    public class User
    {
        public DateTime? Date { get; set; } = DateTime.Today;

        public TimeSpan? From { get; set; } = DateTime.Now.TimeOfDay;

        public TimeSpan? To { get; set; } = DateTime.Now.TimeOfDay.Add(new TimeSpan(01, 00, 00));

        public string? Repeats { get; set; } = "Does not repeat";

        public string? ParkingArea { get; set; }

        public string? ParkingLot { get; set; }
    }
}
