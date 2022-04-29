exports.default = ({job, ...core}) => {
    job('test', {
        title: '测试',
        task: async (ctx, task) => {
            
        }
    });
};