exports.default = ({job, ...core}) => {
    job('project:test', {
        title: '测试',
        task: async (ctx, task) => {
            
        }
    });
};