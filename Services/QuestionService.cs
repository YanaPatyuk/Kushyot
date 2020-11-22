using Kushyot.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;


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

        public List<Question> GetAllQuestions()
        {
            Console.WriteLine("QuestionService:get All ");
            var question = _questions.Find(question => true).ToList();
            if (question == null) Console.Write("QuestionService:no questions");
            return question;
        }
        public Question Get(string id) =>
            _questions.Find<Question>(question => question.Id == id).FirstOrDefault();

        public Question Create(Question question)
        {
            Console.WriteLine("QuestionService:Create new question");
            Console.WriteLine("QuestionService:" + question);
            _questions.InsertOne(question);
            return question;
        }
        public void Update(string id, Question questionIn)
        {
            Console.WriteLine("QuestionService:update question:" + id);
            Console.WriteLine("QuestionService:update question:rate" + questionIn.Rating + "id:" + questionIn.Id);

            _questions.ReplaceOne(question => question.Id == id, questionIn);
        }

        public void DeleteQuestion(Question questionIn) =>
            _questions.DeleteOne(question => question.Id == questionIn.Id);

        public void DeleteQuestion(string id) =>
            _questions.DeleteOne(question => question.Id == id);

        public List<Question> GetFilterQurstions(FilterData info)
        {
            Console.WriteLine("QuestionService:filter");
            Console.WriteLine("QuestionService:filter question:" + info.Adult);
            
            var filter = Builders<Question>.Filter.Eq("Adult", info.Adult) &
             Builders<Question>.Filter.AnyIn(quesyion => quesyion.Format, info.Format) & 
            Builders<Question>.Filter.AnyIn(quesyion => quesyion.Subject, info.Subject);
            
            var q = _questions.Find(filter).ToList<Question>();
            Console.WriteLine("QuestionService:filter end found:" + q.Count());
            if (q == null) Console.Write("QuestionService:filter no questions");
            return q;
        }

        private bool insideArray(string[] givenData, string[] data)
        {
            Console.WriteLine("QuestionService:Inside array");
            List<string> givenDataList = givenData.ToList<string>();
            Console.WriteLine("QuestionService:Inside array:" + givenDataList.ToString());
            foreach (var d in data)
            {
                Console.WriteLine("QuestionService:Inside array:" + d);
                if (givenDataList.Contains(d)) return true;
            }
            return false;
        }
    }
}