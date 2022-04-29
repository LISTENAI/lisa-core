exports.default = ({job, ...core}) => {
    console.log(job)
    job('project:test', {
        title: '测试',
        task: async (ctx, task) => {
            
        }
    });
};