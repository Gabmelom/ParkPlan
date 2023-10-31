namespace ParkPlan.Data
{
    public class User
    {
        public string? Username { get; set; }

        public DateTime? Date { get; set; }

        public TimeSpan? From { get; set; }

        public TimeSpan? To { get; set; }

        public string? Repeats { get; set; }
    }
}
