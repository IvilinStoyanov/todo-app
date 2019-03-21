using System;

namespace todo_app.Common.Services
{
    public class CommonService
    {
        public string CalculateRemainingDays(DateTime endDate, DateTime startDate)
        {
            int dayIncluded = 1;

            int result = ((endDate - startDate).Days) + dayIncluded;

            return result.ToString();
        }
    }
}