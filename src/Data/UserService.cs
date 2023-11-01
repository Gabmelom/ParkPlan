namespace ParkPlan.Data
{
    public class UserService
    {
        private User User { get; set; }

        public UserService()
        {
            User = new User();
        }

        public Task<User> GetUserAsync() => Task.FromResult(User);

        public void SetUsername(string? username)
        {
            User.Username = username ?? "Dennis";
        }
    }
}
