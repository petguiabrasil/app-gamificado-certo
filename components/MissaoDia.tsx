import React from "react";

interface MissaoDiaProps {
  titulo?: string;
  descricao?: string;
}

const MissaoDia: React.FC<MissaoDiaProps> = ({
  titulo = "Missão do Dia",
  descricao = "Complete sua atividade para ganhar recompensas!",
}) => {
  return (
    <div style={{
      padding: "20px",
      background: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      margin: "20px 0"
    }}>
      <h2 style={{ marginBottom: "10px" }}>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
};

export default MissaoDia;