db.articles.aggregate(
   [
     { $match: { $text: { $search: "паравоз" } } },
     { $group: { _id: null, views: { $sum: 1} } }
   ]
)