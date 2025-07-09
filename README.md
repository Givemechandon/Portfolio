# Portfólio | Dev Bruno Correia

Este projeto é o portfólio profissional de **Bruno Correia**, desenvolvido com o objetivo de apresentar seus projetos, habilidades e formas de contato de forma moderna, funcional e responsiva.

## 🚀 Tecnologias Utilizadas

- [ReactJS (JSX)](https://reactjs.org/)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [EmailJS API](https://www.emailjs.com/)
- [Create React App](https://create-react-app.dev/)

## 📬 Funcionalidade

- Exibição de projetos realizados.
- Seção de contato com envio direto para o e-mail do desenvolvedor via **EmailJS**.

## 🛠️ Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/brunocorreia-dev/seu-repositorio.git
```

2. **Acesse a pasta do projeto:**

```bash
cd nome-da-pasta
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto:**

```bash
npm start
```

> O projeto irá rodar localmente em: `http://localhost:3000`

---

## 📦 Build para produção

Para gerar os arquivos otimizados de produção:

```bash
npm run build
```

---

## ✉️ Configuração do EmailJS

Para o formulário de contato funcionar corretamente, você precisa:

1. Criar uma conta em [EmailJS](https://www.emailjs.com/)
2. Criar um **Service**, **Template** e obter sua **Public Key**
3. Substituir os valores nos campos:
   ```js
   emailjs.sendForm(
     "SEU_SERVICE_ID",
     "SEU_TEMPLATE_ID",
     form.current,
     "SUA_PUBLIC_KEY"
   );
   ```

---

## 👨‍💻 Desenvolvido por

[**Bruno Correia**](https://www.linkedin.com/in/bruno-c%C3%A9sar-correia-a0bab5186/)  
Frontend Developer | ReactJS | Web Dev  
🔗 GitHub: [github.com/Givemechandon](https://github.com/Givemechandon)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](LICENSE) para mais detalhes.
