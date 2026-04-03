# Como Adicionar Fotos à Galeria - Serralheria LUKANN

## Passo a passo (simples)

### 1. Coloque a foto na pasta correta

As fotos ficam em `public/gallery/` organizadas por categoria:

```
public/
  gallery/
    grades/        → fotos de grades
    portoes/       → fotos de portões
    escadas/       → fotos de escadas
    estruturas/    → fotos de coberturas, pergolados, etc.
    reformas/      → fotos de reformas
    pinturas/      → fotos de pinturas
```

**Dica de nomes:** Use nomes sem espaços e sem acento.
Ex: `portao-garagem-joao-2024.jpg`

**Formatos aceitos:** `.jpg`, `.jpeg`, `.png`, `.webp`

**Tamanho recomendado:** Máximo 2MB por foto. Resolução ideal: 1200×900px.

---

### 2. Registre a foto no arquivo de configuração

Abra o arquivo: `src/data/gallery.ts`

No final do array `fotos`, antes do comentário `ADICIONE NOVAS FOTOS ABAIXO`, inclua uma nova entrada:

```typescript
{
  id: "portao-03",                              // ID único (não repetir)
  src: "/gallery/portoes/portao-novo.jpg",      // caminho da foto
  alt: "Portão de garagem preto fosco",         // descrição para acessibilidade
  categoria: "portoes",                         // categoria (ver lista abaixo)
  titulo: "Portão Garagem - João - 2024",       // título exibido na galeria
  destaque: false,                              // true = aparece nos destaques
},
```

**Categorias disponíveis:**
- `"grades"` — Grades de proteção
- `"portoes"` — Portões
- `"escadas"` — Escadas
- `"estruturas"` — Coberturas, pergolados
- `"reformas"` — Reformas e restaurações
- `"pinturas"` — Pinturas e acabamentos

---

### 3. Pronto!

Salve o arquivo e a galeria já vai exibir a nova foto com filtro por categoria e lightbox (ampliar ao clicar).

---

## Dicas extras

- **Ordem das fotos:** As fotos aparecem na ordem em que estão no array. Coloque as melhores primeiro.
- **Destaque:** Use `destaque: true` nas fotos mais bonitas — pode ser usado futuramente para uma seção de destaques.
- **Fotos de antes/depois:** Você pode adicionar ambas e colocar no título "Antes" e "Depois".

---

## Estrutura do projeto (referência)

```
src/
  data/
    gallery.ts       ← AQUI você adiciona as fotos
    services.ts      ← serviços oferecidos
    testimonials.ts  ← depoimentos de clientes
  components/
    Gallery.tsx      ← componente da galeria
    ...
public/
  gallery/           ← AQUI você coloca os arquivos de imagem
    grades/
    portoes/
    ...
```
