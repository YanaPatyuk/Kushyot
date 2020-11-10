
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Kushyot.Services;
using Kushyot.Models;
using System.Security;

namespace Kushyot.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase {
        private QuestionService _questionService;

        public QuestionsController(QuestionService service)
        {
            _questionService = service;
        }

        [HttpPost("AddQuestion")]
        public IActionResult AddQuestion([FromBody]Question question) {
            _questionService.Create(question);
            return Ok("Added");
            //return CreatedAtRoute("GetQuestion", new { id = question.Id.ToString() }, question);
        }
        //get all questions
        [HttpGet("[action]")]
        public IActionResult GetQuestions() {
            var allQuestions = _questionService.GetAllQuestions();
            return Ok(allQuestions);
        }

        //delete a question

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var question = _questionService.Get(id);

            if (question == null)
            {
                return NotFound();
            }

            _questionService.DeleteQuestion(question.Id);

            return NoContent();
        }
        /**S
                //Add new question
        [HttpPost("AddQuestion")]
        public IActionResult AddQuestion([FromBody]Question question) {
            _questionService.Create(question);
            return Ok("Added");
        }

        public ActionResult<Question> Create(Question question)
        {
            _questionService.Create(question);

            return CreatedAtRoute("GetQuestion", new { id = question.Id.ToString() }, question);
        }
        */
     }
}
