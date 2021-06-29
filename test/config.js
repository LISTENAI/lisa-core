module.exports = ({application, fs, ...core} = lisa) => {
  application.configuration(config => {
    config.root = "./out1"
  })
}
