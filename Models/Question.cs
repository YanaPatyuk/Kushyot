using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Kushyot.Models
{
    public class Question
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Question")]
        public string QuestionData{get;set;}

        public string[] Subject {get; set;}

        public string[] Format {get; set;}

        public string Author { get; set; }

        public bool Adult {get; set;}

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Date { get; set;}


    }
}