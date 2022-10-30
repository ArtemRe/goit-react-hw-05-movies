import { Blocks } from  'react-loader-spinner'
import { LoaderContainer } from './Loader.module'

export default function Loader() {
  return (
    <LoaderContainer>
      <Blocks
          visible={true}
          height="400"
          width="400"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
      />
    </LoaderContainer>
  )
}

