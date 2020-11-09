namespace Kushyot.Models
{
    public class KushyaDatabaseSettings : IKushyaDatabaseSettings
    {
        public string QuestionsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IKushyaDatabaseSettings
    {
        string QuestionsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}