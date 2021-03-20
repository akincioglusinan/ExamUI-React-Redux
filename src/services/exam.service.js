import { api } from '../actions/api'
import authHeader from './auth-header';

class ExamService {
    getarticles() {
        return api().get('/exam/getarticles')
    }
    getexams() {
        return api().get('/exam')
    }

    getexam(id) {
        return api().get('/exam/getexam/' + id)
    }
e
    add(exam, questions) {
        //article.categoryId=parseInt(article.categoryId);
        var request={exam, questions};
        return api().post('/exam/addexam', request, { headers: authHeader() });
    }

    delete(id) {
        return api().get('/exam/removeexam/' + id, { headers: authHeader()});
    }

}

export default new ExamService();