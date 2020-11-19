using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Newtonsoft.Json;

namespace Kushyot.Models
{
    public class FilterData
    {
        public string[] Subject {get; set;}

        public string[] Format {get; set;}

        public bool Adult { get; set;}
    }
}