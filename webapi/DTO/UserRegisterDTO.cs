﻿namespace webapi.DTO
{
    public class UserRegisterDTO
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Username { get; set; }
        public required int Index { get; set; }
        public required string Field { get; set; }
    }
}
