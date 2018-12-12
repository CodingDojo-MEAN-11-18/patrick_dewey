const Task = require('mongoose').model('Task');

module.exports = {
    index(request, response) {
        const task = new Task({
            title:'Bill',
            description: 'Lame',
        })
        task.save()
        Task.find({})
            .then(tasks => {
                response.json({ tasks })
            })
            .catch(error => response.json(error));
        
        
    },
    show(request, response) {
        Task.findById(request.params.id)
            .then(task => {
                response.json({task})
            })
            .catch(error => response.json(error));
    },
    create(request, response) {
        Task.create(request.body)
            .then(task => {
                response.json({task})
            })
            .catch(error => {
                response.json(error)
            })
    },
    update(request, response) {
        Task.findByIdAndUpdate(request.params.id, request.body)
            .then(task => {
                response.json(task)

            })
            .catch(error => {
                response.json(error)
            })
    },
    destroy(request, response) {
        Task.findByIdAndDelete(request.params)
            .then(result => response.json(result))
            .catch(error => response.json(error));
    },

};
    