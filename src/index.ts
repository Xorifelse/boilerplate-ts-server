const main = async () => {
  console.log('started')
}

main()
  .catch(e => console.error(e))
  .finally(() => {
    console.log('ended')
  })
