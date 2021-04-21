import { LoadingOverlay } from "../../styles/components/layout/stylesLoading";
import Image from "next/image";

function Loading() {
  return (
    <LoadingOverlay>
      <div className="loadingContainer">
        <Image loading="eager" layout="fill" src="/loading.gif" quality={100} />

        <p>Estamos retornando os detalhes para você 😃...</p>
      </div>
    </LoadingOverlay>
  );
}

export default Loading;
