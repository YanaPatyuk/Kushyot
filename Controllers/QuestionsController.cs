
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
            //try add question
            try
            {
                //if not null--add and return OK
                if(question != null){
                    _questionService.Create(question);
                    return Ok(question);
                }
                return BadRequest("Question did not added");
                //if somethong went wrong return error
            } catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("GetFilterdQuestions")]
        public IActionResult GetFilterdQuestions([FromBody] FilterData info) {
             try
            {
                //if not null--add and return OK
                if(info != null){
                   var filterdQuestion =  _questionService.GetFilterQurstions(info);
                    return Ok(filterdQuestion);
                }
                return BadRequest("Question did not filterd");
                //if somethong went wrong return error
            } catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("UpdateQuestion")]
        public IActionResult UpdateQuestion( [FromBody]Question question) {
            //try add question
            Console.WriteLine("Questioncontroller:update question:"+ question.Id);
            try
            {
                //if not null--add and return OK
                if(question != null){
                    _questionService.Update(question.Id, question);
                    return Ok(question);
                }
                return BadRequest("Question did not updated");
                //if somethong went wrong return error
            } catch(Exception ex){
                return BadRequest(ex.Message);
            }
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
