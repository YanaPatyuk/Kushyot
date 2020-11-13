using Kushyot.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Kushyot.Services
{
    public class QuestionService
    {
        private readonly IMongoCollection<Question> _questions;

        public QuestionService(IKushyaDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _questions = database.GetCollection<Question>(settings.QuestionsCollectionName);
            Console.WriteLine("QuestionService:Created");
        }

        public List<Question> GetAllQuestions(){
            Console.WriteLine("QuestionService:get All ");
            var question =  _questions.Find(question => true).ToList();
            if(question == null) Console.Write("QuestionService:no questions");
            return  question;
        }
        public Question Get(string id) =>
            _questions.Find<Question>(question => question.Id == id).FirstOrDefault();
        
        public Question Create(Question question)
        {
            Console.WriteLine("QuestionService:Create new question");
            Console.WriteLine("QuestionService:" + question);
            Console.WriteLine("QuestionService:" + question.ToString());
            Console.WriteLine("QuestionService:" + question.Author);
            _questions.InsertOne(question);
            return question;
        }
        public void Update(string id, Question questionIn) =>
            _questions.ReplaceOne(question => question.Id == id, questionIn);

        public void DeleteQuestion(Question questionIn) =>
            _questions.DeleteOne(question => question.Id == questionIn.Id);

        public void DeleteQuestion(string id) => 
            _questions.DeleteOne(question => question.Id == id);
    }
}