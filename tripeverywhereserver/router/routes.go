package router

import (
	"github.com/gin-gonic/gin"
	"github.com/rafabcanedo/TripEverywhere/handler"
)

func initializeRoutes(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	{
		v1.GET("/trip", handler.ShowOpeningHandler)

		v1.POST("/trip", handler.CreateOpeningHandler)

		v1.PUT("/trip", handler.UpdateOpeningHandler)

		v1.DELETE("/trip", handler.DeleteOpeningHandler)

		v1.GET("/trips", handler.ListOpeningsHandler)
	}
}
