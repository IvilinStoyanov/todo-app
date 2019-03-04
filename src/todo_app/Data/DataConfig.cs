using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using todo_app.Models;

namespace todo_app.Data
{
    public class DataConfig
    {
        SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);

        public void AddTask(TodoTask task)
        {
            SqlCommand command = new SqlCommand("Sp_register", connection);

            command.CommandType = CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@Description", task.Description);

            command.Parameters.AddWithValue("@Status", task.Status);

            connection.Open();

            command.ExecuteNonQuery();

            connection.Close();
        }

        public DataSet GetTask()
        {
            SqlCommand command = new SqlCommand("get_all", connection);

            command.CommandType = CommandType.StoredProcedure;

            SqlDataAdapter dataAdapter = new SqlDataAdapter(command);

            DataSet dataSet = new DataSet();

            dataAdapter.Fill(dataSet);

            return dataSet;
        }
    }
}