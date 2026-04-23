# HybridFlow

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()
[![Laravel](https://img.shields.io/badge/backend-Laravel-red?logo=laravel)](https://laravel.com/)
[![React](https://img.shields.io/badge/frontend-React-blue?logo=react)](https://react.dev/)
[![MySQL](https://img.shields.io/badge/database-MySQL-blue?logo=mysql)](https://www.mysql.com/)

Sistema web para **gestão de salas e reservas**, com foco em ambientes híbridos de trabalho.  
O projeto permite gerenciar salas, controlar disponibilidade e evitar conflitos de agendamento em tempo real.

---

## Estrutura do Projeto
/backend → API REST (Laravel)
/frontend → Interface (React + Vite + Tailwind)

Arquitetura separada (API + SPA), facilitando escalabilidade e manutenção.

---

## Stack Utilizada

### Backend
- Laravel
- PHP
- MySQL
- Eloquent ORM

### Frontend
- React
- Vite
- Tailwind CSS
- Fetch API

---

## Funcionalidades Atuais

- CRUD de salas
- Criação de reservas
- Validação de conflito de horários
- Integração completa entre frontend e backend
- Atualização em tempo real após ações (create/update/delete)

---

## Como Rodar o Projeto

### Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
---

Observações  
O backend roda em: http://127.0.0.1:8000  
O frontend roda em: http://localhost:5173  
Certifique-se de que o CORS está configurado corretamente no Laravel

---

Roadmap  
Interface mais refinada com Tailwind  
Autenticação de usuários (login/token)  
Dashboard com métricas  
Sistema de permissões  
Melhor organização de componentes no frontend  

---
Autor -> Henrique Hiroshi Koshiba Reis
