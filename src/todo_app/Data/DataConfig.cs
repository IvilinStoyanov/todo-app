using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using todo_app.Common.Services;
using todo_app.Data.Dtos;
using todo_app.Models;

namespace todo_app.Data
{
    public class DataConfig
    {
        SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
        CommonService service = new CommonService();

        public void AddTask(TodoTask task)
        {
            SqlCommand command = new SqlCommand("add_task", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            command.Parameters.AddWithValue("@Description", task.Description);

            command.Parameters.AddWithValue("@Status", "Pending");

            command.Parameters.AddWithValue("@CreatedOn", DateTime.Now);

            command.Parameters.AddWithValue("@Deadline", task.Deadline);
         
            connection.Open();

            command.ExecuteNonQuery();

            connection.Close();
        }

        public DataSet GetTask()
        {
            SqlCommand command = new SqlCommand("get_task", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            SqlDataAdapter dataAdapter = new SqlDataAdapter(command);

            DataSet dataSet = new DataSet();

            dataAdapter.Fill(dataSet);

            return dataSet;
        }

        public DataSet GetTaskById(int id)
        {
            SqlCommand command = new SqlCommand("get_taskById", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            SqlDataAdapter dataAdapter = new SqlDataAdapter(command);

            DataSet dataSet = new DataSet();

            command.Parameters.AddWithValue("@Id", id);

            dataAdapter.Fill(dataSet);

            return dataSet;
        }

        public void DeleteTaskById(int id)
        {
            SqlCommand command = new SqlCommand("delete_task", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            command.Parameters.AddWithValue("@Id", id);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();
        }

        public void UpdateTaskById(int id, TaskForUpdateDto task)
        {
            SqlCommand command = new SqlCommand("update_task", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            command.Parameters.AddWithValue("@Id", id);

            command.Parameters.AddWithValue("@Description", task.Description);

            command.Parameters.AddWithValue("@Status", task.Status);

            command.Parameters.AddWithValue("@Deadline", task.DeadlineUpdate);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();
        }
    }
}